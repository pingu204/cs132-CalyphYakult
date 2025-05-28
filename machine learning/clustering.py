import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("./data/question1.csv")
df = pd.get_dummies(df, columns=["Region"], drop_first=True)

features = ['Year', 'Number of Enrollees', 'Number of Schools', 'DepEd Budget', 'Budget_Enrollees', 'Budget_Schools'] + [col for col in df.columns if 'Region_' in col]


scaler = StandardScaler()
X = scaler.fit_transform(df[features])

kmeans = KMeans(n_clusters=3, random_state=42)
df['Cluster'] = kmeans.fit_predict(X)

pca_3d = PCA(n_components=3)
X_pca_3d = pca_3d.fit_transform(X)

df['PC1'] = X_pca_3d[:, 0]
df['PC2'] = X_pca_3d[:, 1]
df['PC3'] = X_pca_3d[:, 2]

plt.style.use("dark_background")
colors = ["#648FFF", "#785EF0", "#DC267F", "#FE6100", "#FFB000", "#000000", "#FFFFFF"]

fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')
scatter = ax.scatter(df['PC1'], df['PC2'], df['PC3'],
                     c=df['Cluster'], cmap='flare_r', s=50, alpha=1.0)

ax.set_title('3D Cluster Visualization using Principal Component Analysis (PCA)')
ax.set_xlabel('Principal Component 1')
ax.set_ylabel('Principal Component 2')
ax.set_zlabel('Principal Component 3')

plt.legend(*scatter.legend_elements(), title="Cluster")
plt.tight_layout()
plt.savefig(f"Cluster.png", dpi=600, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.show()

def plot_bar(x, y, title):
    sns.barplot(data=df, x=x, y=y, palette=colors)
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

region_cols = [col for col in df.columns if col.startswith("Region_")]

df['Region_Name'] = df[region_cols].idxmax(axis=1).str.replace("Region_", "")

region_cluster_counts = df.groupby(['Region_Name', 'Cluster']).size().unstack(fill_value=0)

plt.figure(figsize=(10, 8))
sns.heatmap(region_cluster_counts, annot=True, fmt="d", cmap="flare_r")
plt.title("Region Distribution per Cluster")
plt.xlabel("Cluster")
plt.ylabel("Region")
plt.tight_layout()
plt.savefig(f'./data/cluster_plots/Region_Heatmap.png', dpi=600, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.show()