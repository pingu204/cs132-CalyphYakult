import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

# Load CSV
df = pd.read_csv("./data/question1.csv")

# One-hot encoding and drop the first column to avoid multicollinearity
df_one_hot = pd.get_dummies(df['Region'], columns=["Region"], drop_first=True)
df = pd.concat([df, df_one_hot], axis=1)

# Define the features
features = ['Year', 'Number of Enrollees', 'Number of Schools', 'DepEd Budget', 'Budget_Enrollees', 'Budget_Schools'] + [col for col in df.columns if 'Region_' in col]

# Scale
scaler = StandardScaler()
X = scaler.fit_transform(df[features])

# Cluster
kmeans = KMeans(n_clusters=3, random_state=42)
df['Cluster'] = kmeans.fit_predict(X)
# Turn to string so plotly recognizes it as Discrete
df['Cluster(Discrete)'] = df['Cluster'].astype(str)

# Apply PCA to visualize the clustering
pca_3d = PCA(n_components=3)
X_pca_3d = pca_3d.fit_transform(X)

df['PC1'] = X_pca_3d[:, 0]
df['PC2'] = X_pca_3d[:, 1]
df['PC3'] = X_pca_3d[:, 2]

# Plot settings
plt.style.use("dark_background")
colors = ["#648FFF", "#785EF0", "#DC267F", "#FE6100", "#FFB000", "#000000", "#FFFFFF"]

# 3D Clustering Plot
fig_3d = px.scatter_3d(
    df,
    x='PC1',
    y='PC2',
    z='PC3',
    color='Cluster(Discrete)',
    color_discrete_sequence=['#f4a266', '#c24155', '#57106e'],
    title='3D Cluster Visualization using Principal Component Analysis (PCA)',
    labels={
        'PC1': 'Principal Component 1',
        'PC2': 'Principal Component 2',
        'PC3': 'Principal Component 3',
        'Cluster(Discrete)': 'Cluster'
    },
    opacity=1.0
)

fig_3d.update_layout(
    scene=dict(
        bgcolor='rgb(0,0,0)',
    ),
    template='plotly_dark'
)

fig_3d.show()


# Bar Plots for relevant features
def plot_bar(x, y, title):
    fig = plt.figure(figsize=(16, 8))
    sns.barplot(data=df, x=x, y=y, palette=colors, hue='Cluster', legend=False)
    plt.title(title)
    ax = plt.gca()
    ax.get_yaxis().get_offset_text().set_visible(False) 
    plt.savefig(f'./data/cluster_plots/{title}.png', dpi=600, bbox_inches='tight', facecolor=fig.get_facecolor())
    plt.show()

plot_bar('Cluster', 'Number of Enrollees', 'Average Number of Enrollees by Cluster (Millions)')
plot_bar('Cluster', 'Number of Schools', 'Average Number of Schools by Cluster')
plot_bar('Cluster', 'DepEd Budget', 'Average DepEd Budget by Cluster (Ten Billions)')
plot_bar('Cluster', 'Budget_Enrollees', 'Average Budget per Enrollee by Cluster')
plot_bar('Cluster', 'Budget_Schools', 'Average Budget per School by Cluster (Hundred Millions)')

# Heatmap to visualize distribution of regions per cluster
region_cluster_counts = df.groupby(['Region', 'Cluster']).size().unstack(fill_value=0)

fig = plt.figure(figsize=(16, 8))
sns.heatmap(region_cluster_counts, annot=True, fmt=".0f", cmap="flare_r")
plt.title("Region Distribution per Cluster")
plt.xlabel("Cluster")
plt.ylabel("Region")
plt.tight_layout()
plt.savefig("./data/cluster_plots/Region_Heatmap.png", dpi=600, bbox_inches="tight")
plt.show()