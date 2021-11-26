CREATE TABLE employee_table
             (
                          emp_id     INTEGER NOT NULL auto_increment,
                          age        INTEGER,
                          contact    BIGINT,
                          department VARCHAR(255),
                          email      VARCHAR(255),
                          name       VARCHAR(255),
                          salary DOUBLE PRECISION,
                          PRIMARY KEY (emp_id)
             )