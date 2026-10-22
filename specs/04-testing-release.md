# Testing and release
- Unit and component tests: Jest and React Testing Library. Test behaviour
users see, not internals.
- E2E tests: Playwright for the home page in en and es, the language switch
and the contact form.
- Accessibility check in E2E with axe.
- CI (GitHub Actions) runs lint, tests and build on every pull request.
- Pull requests only; main stays deployable. Preview deployment per pull
request.
