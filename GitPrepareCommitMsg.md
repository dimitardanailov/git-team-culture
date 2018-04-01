# How to install this repo

The developer should read this documentation: [http://marionebl.github.io/commitlint/#/guides-local-setup](http://marionebl.github.io/commitlint/#/guides-local-setup)

The should install: [https://github.com/typicode/husky](https://github.com/typicode/husky)

The next step is copy and paste the template message:

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

### package.json

package.jsom should have this section: 

```javascript
# Script task
"scripts": {
	"commitmsg": "./node_modules/.bin/commitlint -e $GIT_PARAMS"
}
```

