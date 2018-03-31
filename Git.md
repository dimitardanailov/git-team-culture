# Committing rules and responsibilities

### Commit message restrictions

The purpose of these new restrictions, implemented via a git hook, is to prevent commit messages that do not have a type, ticket number, ticket title and ticket description.

An example for a passing commit message would be,

```bash
type: [Jira Ticket]
"[Ticket Title]" 
[Ticket Description]
```

This repo is using [commitlint](https://github.com/marionebl/commitlint). 

Each commit should have: 
- type
- ticket number
- ticket title
- ticket description

The default types are: 
	- 🎨 (art) when improving the format/structure of the code
	- 🐎 (racehorse) when improving performanc
	- 🚱 (non-potable_water) when plugging memory leaks
	-	📝 (memo) when writing docs
	- 🐧 (penguin) when fixing something on Linux 
	- 🍎 (apple) when fixing something on Mac OS
	- 🏁 (checkered_flag) when fixing something on Windows
	- 🐛 (bug) when fixing a bug
	- 🔥 (fire) when removing code or files
	- 💚 (green_heart) when fixing the CI build
	- ✅ (white_check_mark) when adding tests
	-	🔒 (lock) when dealing with security
	- ⬆️ (arrow_up) when upgrading dependencies
	- ⬇️ (arrow_down) when downgrading dependencies
	- 👕 (shirt) when removing linter warnings

I'm using the same git commit types like Atom: [https://www.npmjs.com/package/conventional-changelog-atom](https://www.npmjs.com/package/conventional-changelog-atom)

### Checkin comment
The checkin comment for the change you push should include:
- type
- ticket number
- ticket title
- and a explanation of your work.

Please say what changes are made, not what problem was fixed, e.g.:

```bash
# Good Commit
type: [Jira Ticket]
"[Ticket Title]" 
[Ticket Description]
```

```bash
# Bad commit
Bug 123456 - crash clicking button on www.example.com
```

Why the commit is bad: 
- Commit doesn't have type
- Commit doesn't have title
- Commit doesn't have footer is too short.

If you are not the author of the code, use `git config --global` to specify the actual author in the Git changeset:

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### Sources

- [Committing rules and responsibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Committing_Rules_and_Responsibilities)
- [RailsConf 2015 - Implementing a Strong Code-Review Culture](https://www.youtube.com/watch?v=PJjmw9TRB7s)
- [Better Commit Messages with a .gitmessage Template](https://robots.thoughtbot.com/better-commit-messages-with-a-gitmessage-template)