module.exports = async ({ github, context, core }) => {
  // 1. Log a message to the GitHub Actions workflow console
  core.info(`Running custom script triggered by event: ${context.eventName}`)
  core.info(`Pushed by user: ${context.actor}`)

  // 2. Perform actions using the GitHub API (e.g., adding a comment or creating a check)
  const commitSha = context.sha
  core.notice(`Processing commit SHA: ${commitSha}`)

  // 3. Set an output variable for downstream workflow steps
  core.setOutput('status', 'success')
}
