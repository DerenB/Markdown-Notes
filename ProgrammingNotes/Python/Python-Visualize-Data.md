# Python

# Table of Contents

- [Python](#python)
- [Table of Contents](#table-of-contents)
- [Basics](#basics)
- [Libraries](#libraries)
    - [Data Process](#data-process)
    - [Data Storage Options](#data-storage-options)
    - [Data Visualization Libraries](#data-visualization-libraries)
- [Dataframe Functions](#dataframe-functions)


# Basics

# Libraries

- pandas - cornerstone of data analysis
- matplotlib - foundational library for visualizations. Other libraries built on top of matplotlib
- numpy - numeric library that serves as the foundation of all calculations in Python
- seaborn - statistical visualization tool built on top of matplotlib
- statsmodels - library with many advanced statistical functions
- scipy - advanced scientific computing, including functions for optimization, linear algrebra, image processing
- scikit-learn - most popular machine learning library for Python

### Data Process

- Data Extraction
- Data Cleaning
- Data Wrangling
- Analysis
- Action

### Data Storage Options

- Python Lists `['item 1','item 2','item 3']`
- CSV Files
- Pandas Dataframes
  - Read with `df = pd.read_csv('fileName')`

### Data Visualization Libraries

- Two Common Libraries
- Matplotlib
  - Most well-known
- Seaborn
  - Built on Matplotlib
  - Leverages statistics in visualizations

# Dataframe Functions

- Describe
  - Statistical properties of data set
  - Count, mean, std, min, 25%, 50%, 75%, max
  - `dataframe.describe()`
- Describe, 1 column
  - Shows statistical data for a single column
  - `dataframe['Column Name'].describe()`
- Head
  - Returns headers and first 5 rows of data
  - `dataframe.head`
- Info
  - Returns columns, non-null values, datatypes, memory usage
  - `dataframe.info()`
- Shape
  - Returns size of dataframe (row, columns)
  - `dataframe.shape`
- Unique Values
  - Lists the unique values in a column
  - `dataframe['ColumnName'].unique()`

# Dataframe Data Management

- Remove rows based on column value
  - data_table.drop(data_table[data_table['Source'] == 'Service Fee'].index, inplace = True)
  - df.drop(df[df['ColumnName'] condition].index, inplace = True)








