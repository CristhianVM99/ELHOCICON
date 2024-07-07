-- CREATE DATABASE IF NOT EXISTS hocicon
SELECT 'CREATE DATABASE hocicon'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'hocicon')\gexec