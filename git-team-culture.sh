#!/bin/bash

unlink ./.git/hooks/prepare-commit-msg

ln -s ./.git-templates/hooks/prepare-commit-msg ./.git/hooks/prepare-commit-msg