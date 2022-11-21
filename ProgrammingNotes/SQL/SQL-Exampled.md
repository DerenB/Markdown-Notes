# SQL Examples

# Table of Contents

- [SQL Examples](#sql-examples)
- [Table of Contents](#table-of-contents)
- [Time](#time)
- [Combined Sum](#combined-sum)
- [Like](#like)

# Time

Returns the date and time data formatted
```
SELECT user,
  strftime('%Y-%m-%d',timestamp),
  strftime('%H:%M:%S', timestamp)
FROM hacker_news
ORDER BY 2 ASC
LIMIT 20;
```
<hr>

# Combined Sum

Find individual users who have gotten combined scores of more than 200
```
SELECT user, SUM(score)
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200
ORDER BY 2 DESC;
```
<hr>

# Like

Find users where the url contains a value
```
SELECT user, COUNT(*)
FROM hacker_news
WHERE url LIKE '%watch?v=dQw4w9WgXcQ%'
GROUP BY user
ORDER BY COUNT(*) DESC;
```
<hr>

Categorize each item based on their source
```
SELECT CASE
    WHEN url LIKE '%github.com%' THEN 'GitHub'
    WHEN url LIKE '%medium.com%' THEN 'Medium'
    WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
    ELSE 'Other'
    END AS 'Source', COUNT(*)
FROM hacker_news;
GROUP BY 1;
```
<hr>


