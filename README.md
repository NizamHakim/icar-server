# iCar Server

Server for [`iCar ITS`](https://github.com/NizamHakim/icar). Utilize Express.js, Prisma ORM, PostgreSQL, and OSRM Server with Docker.

## Developer Notes

- This server utilize OSRM server to serve one of it's function, make sure to run OSRM server in a docker container using `nizamhakims/surabaya-osrm` Dockerimage before running this server.
- During development, this server would run on port `5000` and OSRM server would run on `5001`. If you want to change OSRM server port please adjust `OSRM_URL` in `.env` accordingly.
