### Copy

Windows

```
Copy-Item "[Destination]\.git-templates\hooks\prepare-commit-msg" -Destination .\.git\hooks\prepare-commit-msg
```

### Symlinks

Linux / Mac OS X

```bash
ln -s ./.git-templates/hooks/prepare-commit-msg .git/hooks/prepare-commit-msg
```

Windows

Format is: 

```
New-Item -Path C:\LinkDir -ItemType SymbolicLink -Value F:\RealDir
```

```
New-Item -Path .\.git\hooks\prepare-commit-msg -ItemType SymbolicLink -Value .\.git-templates\hooks\prepare-commit-msg
```