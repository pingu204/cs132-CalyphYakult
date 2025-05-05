from scipy.stats import kruskal
import pandas as pd

# Load your data
df = pd.read_csv("question2.csv")

# Group the data by Region
df['DA_Index'] = df['DA']/df['agri_volume']
DA_groups = df.groupby('Region')['DA_Index'].apply(list)

df_DAR = df[df['Region'] != "National Capital Region (NCR)"].copy()
df_DAR['DAR_Index'] = df_DAR['DAR']/df_DAR['agri_land']
DAR_groups = df_DAR.groupby('Region')['DAR_Index'].apply(list)

df['DENR_Index'] = df['DENR']/df['GRDP']
DENR_groups = df.groupby('Region')['DENR_Index'].apply(list)

df['DHSUD_Index'] = df['DHSUD']/df['Population']
DHSUD_groups = df.groupby('Region')['DHSUD_Index'].apply(list)

df['DICT_Index'] = df['DICT']/df['GRDP']
DICT_groups = df.groupby('Region')['DICT_Index'].apply(list)

df['DILG_Index'] = df['DILG']/df['Population']
DILG_groups = df.groupby('Region')['DILG_Index'].apply(list)

df['DOF_Index'] = df['DOF']/df['GRDP']
DOF_groups = df.groupby('Region')['DOF_Index'].apply(list)

df['DOH_Index'] = df['DOH']/df['Population']
DOH_groups = df.groupby('Region')['DOH_Index'].apply(list)

df['DOJ_Index'] = df['DOJ']/df['Population']
DOJ_groups = df.groupby('Region')['DOJ_Index'].apply(list)

df['DOLE_Index'] = df['DOLE']/df['Population']
DOLE_groups = df.groupby('Region')['DOLE_Index'].apply(list)

df['DOST_Index'] = df['DOST']/df['GRDP']
DOST_groups = df.groupby('Region')['DOST_Index'].apply(list)

df['DOTr_Index'] = df['DOTr']/df['Population']
DOTr_groups = df.groupby('Region')['DOTr_Index'].apply(list)

df['DPWH_Index'] = df['DPWH']/df['Population']
DPWH_groups = df.groupby('Region')['DPWH_Index'].apply(list)

df['DSWD_Index'] = df['DSWD']/df['poverty_population']
DSWD_groups = df.groupby('Region')['DSWD_Index'].apply(list)

df['DTI_Index'] = df['DTI']/df['GRDP']
DTI_groups = df.groupby('Region')['DTI_Index'].apply(list)

df['NEDA_Index'] = df['NEDA']/df['GRDP']
NEDA_groups = df.groupby('Region')['NEDA_Index'].apply(list)

# Run the Kruskal-Wallis H test
groups = [DA_groups, DAR_groups, DENR_groups, DHSUD_groups, DICT_groups, DILG_groups, DOF_groups,
          DOH_groups, DOJ_groups, DOLE_groups, DOST_groups, DOTr_groups, DPWH_groups, DSWD_groups,
          DTI_groups, NEDA_groups]

for group in groups:
    stat, p = kruskal(*group)

    print(*group.name)
    # Print the result
    print(f"Kruskal-Wallis H-test: H={stat}, p={p}")
    if p > 0.05:
        print("=> No significant difference between groups (fail to reject H0)")
    else:
        print("=> Significant difference between groups (reject H0)")
