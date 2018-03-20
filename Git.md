# Committing rules and responsibilities

### Checkin comment
The checkin comment for the change you push should include the bug number and a clear explanation of the fix. Please say what changes are made, not what problem was fixed, e.g.:

Good: "Bug 123456: Null-check pres shell so we don't crash when a button removes itself during its own onclick handler. r=paul, sr=george, a=ringo."

Bad: "Bug 123456: crash clicking button on www.example.com"

If you are not the author of the code, use `git config --global` to specify the actual author in the Git changeset:

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### Commit message restrictions

The purpose of these new restrictions, implemented via a git hook, is to prevent commit messages that do not have a bug number.

An example for a passing commit message would be,

```bash
Bug 577872 - Create WebM versions of Ogg reftests. r=kinetik
```

Note the Bug ####, you at least need that. You also can't commit bustage-fixes without a bug number anymore. This is intentional to keep track of the bug which caused it.

Allowed are:

- Commit messages containing "bug" or "feature"

### commit.template

If you set this to the path of a file on your system, Git will use that file as the default initial message when you commit. The value in creating a custom commit template is that you can use it to remind yourself (or others) of the proper format and style when creating a commit message.

For instance, consider a template file at `~/.git_templates/gitmessage` that looks like this:

```
Subject line (try to keep under 50 characters)

Multi-line description of commit,
feel free to be detailed.

[Ticket: X]
```

Note how this commit template reminds the committer to keep the subject line short (for the sake of `git log --oneline` output), to add further detail under that, and to refer to an issue or bug tracker ticket number if one exists.

To tell Git to use it as the default message that appears in your editor when you run git commit, set the commit.template configuration value:

```bash
$ git config --global commit.template ~/.git_templates/.gitmessage
$ git commit
```

Then, your editor will open to something like this for your placeholder commit message when you commit:

```
Subject line (try to keep under 60 characters)

Multi-line description of commit,
feel free to be detailed.

[Ticket: X]
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   lib/test.rb
#
~
~
".git/COMMIT_EDITMSG" 14L, 297C
```

If your team has a commit-message policy, then putting a template for that policy on your system and configuring Git to use it by default can help increase the chance of that policy being followed regularly.

### Sources

- [Committing rules and responsibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Committing_Rules_and_Responsibilities)
- [RailsConf 2015 - Implementing a Strong Code-Review Culture](https://www.youtube.com/watch?v=PJjmw9TRB7s)