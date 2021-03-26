CREATE TABLE IF NOT EXISTS animals (
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            img VARCHAR,
            sex VARCHAR,
            species VARCHAR,
            state VARCHAR,
            city VARCHAR,
            port VARCHAR,
            telephone VARCHAR,
            description VARCHAR,
		        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  			    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );