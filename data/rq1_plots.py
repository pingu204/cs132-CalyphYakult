# @title Libraries
import numpy as np
import pandas as pd
import geopandas as gpd

import matplotlib as mpl
import matplotlib.font_manager as fm
import matplotlib.pyplot as plt
import seaborn as sns

import datetime

year_list = [2020,2021,2022,2023,2024]

for year in year_list:
    plt.style.use("dark_background")
    # Load PH map
    PHL = gpd.read_file("./Philippines_AL258.kml", driver='KML')
    PHL.rename(columns={"Name":"region_name"}, inplace=True)

    # Load population data
    df = pd.read_csv('question1.csv')

    df_year = (df.loc[df["Year"] == year]).drop(columns=["Year"])
    # Merge dataframes
    gdf = pd.merge(PHL, df_year, on=['region_name'])

    fig, ax = plt.subplots(figsize=(16, 8))

    # Plot choropleth map
    vmin, vmax = gdf['Budget/Enrollees'].min(), gdf['Budget/Enrollees'].max()
    g = gdf.plot(column='Budget/Enrollees', cmap='flare_r', vmin=vmin, vmax=vmax, ax=ax)

    # Clean up
    g.set_axis_off()
    g.spines[['left', 'bottom', 'right', 'top', ]].set_visible(False)

    # Add colorbar
    # https://stackoverflow.com/a/36080553
    f = g.get_figure()
    cax = f.add_axes([0.65, 0.15, 0.03, 0.61])
    sm = plt.cm.ScalarMappable(cmap='flare_r', norm=plt.Normalize(vmin=vmin, vmax=vmax))
    # sm._A = [] # what for?
    cbar = f.colorbar(sm, cax=cax)
    cbar.set_label('PHP per Enrollee', color='white', fontsize=12, rotation=90, labelpad=15)

    cbar.outline.set_visible(False)
    f.set_facecolor('#1b181c')

    # Add titles, labels, and legends
    g.set_title(f'DepED - Budget Allocation (PHP) per Enrollee ({year})',color="white")

    # Save Figure
    plt.savefig(f'DepED - Budget Allocation (PHP) per Enrollee ({year}).png', dpi=600, bbox_inches='tight', facecolor=fig.get_facecolor())

for year in year_list:
    plt.style.use("dark_background")
    # Load PH map
    PHL = gpd.read_file("./Philippines_AL258.kml", driver='KML')
    PHL.rename(columns={"Name":"region_name"}, inplace=True)

    # Load population data
    df = pd.read_csv('question1.csv')

    df_year = (df.loc[df["Year"] == year]).drop(columns=["Year"])
    # Merge dataframes
    gdf = pd.merge(PHL, df_year, on=['region_name'])
    gdf['Budget/Schools'] = gdf['Budget/Schools']/1.e6 # convert to million unit
    fig, ax = plt.subplots(figsize=(16, 8))

    # Plot choropleth map
    vmin, vmax = gdf['Budget/Schools'].min(), gdf['Budget/Schools'].max()
    g = gdf.plot(column='Budget/Schools', cmap='flare_r', vmin=vmin, vmax=vmax, ax=ax)

    # Clean up
    g.set_axis_off()
    g.spines[['left', 'bottom', 'right', 'top', ]].set_visible(False)

    # Add colorbar
    # https://stackoverflow.com/a/36080553
    f = g.get_figure()
    cax = f.add_axes([0.65, 0.15, 0.03, 0.61])
    sm = plt.cm.ScalarMappable(cmap='flare_r', norm=plt.Normalize(vmin=vmin, vmax=vmax))
    # sm._A = [] # what for?
    cbar = f.colorbar(sm, cax=cax)
    cbar.set_label('PHP per School (Millions)', color='white', fontsize=12, rotation=90, labelpad=15)

    cbar.outline.set_visible(False)
    f.set_facecolor('#1b181c')

    # Add titles, labels, and legends
    g.set_title(f'DepED - Budget Allocation (PHP) per School ({year})',color="white")

    # Save Figure
    plt.savefig(f'DepED - Budget Allocation (PHP) per School ({year}).png', dpi=600, bbox_inches='tight', facecolor=fig.get_facecolor())
