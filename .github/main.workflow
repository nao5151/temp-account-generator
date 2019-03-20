workflow "Deploy to GitHub Pages" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filters" {
  uses = "actions/bin/filter@d820d56839906464fb7a57d1b4e1741cf5183efa"
  args = "ref refs/heads/master"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filters"]
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
}
