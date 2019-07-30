# Testing

End-to-End (E2E) testing is done using [Cypress](https://www.cypress.io).

Cypress is open source code and can be used freely.

Tests go into the `tests/cypress/integration/` directory. The few there now are
just to help you get started. They can be deleted or alterd to suit your needs.

[Cypress Documentation](https://docs.cypress.io)

## Running Tests

To run tests, execute the following command from the command line:

    npm run e2e

## Visual Regression Testing

This repository uses [BackstopJS](https://garris.github.io/BackstopJS/) for
visual regression testing! BackstopJS works by collecting *reference* images of
Template and Page patterns.  Reference images are later compared to the current
state after you make changes.

### Prerequisites:

* [Docker and Docker Compose](https://www.docker.com/community-edition#/download)
must be installed and running.

### Workflow:
First, be sure your new work has been committed to your feature branch.
Then, do a build of the dev branch to create reference images

```bash
git checkout dev
npm install
npm start
npm run backstop:ref
```

To check how your current work compares with the reference screenshots created
from the dev branch, check out your feature branch and test it:

```bash
git checkout MYBRANCH
npm install
npm start
npm run backstop:test
```

At this time, do not commit reference images to the repository. BackstopJS is
simply a tool to test for visual regressions during local development.
