import fastify from 'fastify';
import { getResumeStream } from '@resume-creator/renderer';
import placeholdersResume from './data/resume_placeholder.json';
import { ResumeRequest } from './types/body'
import resumeRequestSchema from './schemas/resume_request.json';

const server = fastify( { logger: true } );

/**
 * Returns a PDF resume built with valid data in request.
 */
server.post<{
  Body: ResumeRequest
}>("/resume", {
  schema: {
    body: resumeRequestSchema
  }
}, async (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/pdf")
  return getResumeStream(
    request.body.data,
    request.body.locale || "en-US"
  );
});

/**
 * Returns the placeholders resume example
 */
server.get("/resume/placeholders", async (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/pdf")
  return getResumeStream(
    placeholdersResume,
    "en-US"
  );
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`)
});
