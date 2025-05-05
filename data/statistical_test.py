from scipy.stats import kruskal
import pandas as pd
import scikit_posthocs as sp

# Load your data
df = pd.read_csv("question1.csv")

# Group the data by Region
enrollee_groups = df.groupby('Region')['Budget_Enrollees'].apply(list)
school_groups = df.groupby('Region')['Budget_Schools'].apply(list)

# Run the Kruskal-Wallis H test
stat, p = kruskal(*enrollee_groups)

print(*enrollee_groups.name)
# Print the result
print(f"Kruskal-Wallis H-test: H={stat}, p={p}")
if p > 0.05:
    print("=> No significant difference between groups (fail to reject H0)")
else:
    print("=> Significant difference between groups (reject H0)")

# Run the Kruskal-Wallis H test
stat, p = kruskal(*school_groups)

print(*school_groups.name)
# Print the result
print(f"Kruskal-Wallis H-test: H={stat}, p={p}")
if p > 0.05:
    print("=> No significant difference between groups (fail to reject H0)")
else:
    print("=> Significant difference between groups (reject H0)")

