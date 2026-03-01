Implemented: 
  Client and Note types
  List note for clientId
  Create note for clientId

Not implemented:
  Authorisation
  Database connection and calls

Steps to run:
  1. Within CLI set working directory to /.../assessment-providend where project directory is stored on local device
  2. Execute the following commands: npm install && npm run dev
  3. The Application should be started at http://localhost:3000/ on local
  
  Testing:
  - List note for clientId
    1. Open CMD and execute the following command: http://localhost:3000/api/clients/1/notes 
    (format: http://localhost:3000/api/clients/<clientId: number>/notes)
    2. Check response

  - Create note for clientId
    1. Open CMD and execute the following command: curl -X POST http://localhost:3000/api/clients/2/notes -H "Content-Type: application/json" -d "{\"content\": \"My new note\"}" 
    (format: curl -X POST http://localhost:3000/api/clients/2/notes -H "Content-Type: application/json" -d "{\"content\": \"<noteContent: string>\"}")
    2. Check response

To do:
  1. Implement authorisation check with enabled Note.authorId and additional services for validating Request authorId against Note.authorId 
  2. Implement SwaggerUI within project for Api documentation and ease of testing