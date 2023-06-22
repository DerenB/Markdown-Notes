# CSV File

- Read CSV: `pd.read_csv('filename')`
- Save to CSV: `df.to_csv('filename')`

# Dataframe

- Info on DF: `df.info()`
- First 5 rows: `print(df.head())`

### DF index

- Data selected from a dataframe includes the original indices
- Reset the Index:
    - `df.reset_index()`
    - Returns a new dataframe
- Reset the index and remove the original index column
    - `df.reset_index(drop=True)`
    - Returns a new dataframe
- Reset the index, drop the original index column, don't make a new dataframe
    - `df.reset_index(inplace = True, drop = True)`

### Select Column

- Select Column:
    - `df.columnName`
    - Data is type Series
- Select multiple columns:
    - `newDataFrame = oldDataFrame[['col1', 'col2']]`
    - Data is type DataFrame

### Select Row

- Select specific row by number
    - `df.iloc[num]`
- Select row by condition
    - `df[condition]`

