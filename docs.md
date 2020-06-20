## RDS table scheme

```
CREATE TABLE IF NOT EXISTS visitor_count (
	count_id INT AUTO_INCREMENT PRIMARY KEY,
    visited_date DATE,
    today_visit INT NOT NULL,
    yesterday_visit INT NOT NULL,
    total_visit INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
