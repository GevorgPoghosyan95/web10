# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version

## How do I get set up? ##

### Summary of set up ###
1. Go to project directory
```
    cd web
```
2. Create `.env` file from sample
```
    cp .env.sample .env
```
3. Update db init script permissions
```
chmod +x docker-postgresql-multiple-databases.sh
```
4. Build project by docker
```
    docker-compose up --build
```

5. Open url
```
    http://localhost:5000/api-docs
    In swagger documentation,there is two routes
    create client and get client
    after creating client subscription will bind with client.
```
