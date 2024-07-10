# Issue Auth Service

## Overview

Currently, the auth service is not operational due to an issue with token signing.

I found an issue related to `jsonwebtoken`, but there is no specific issue for `jose`. However, `jose` also seems to have a similar problem.

I have created a directory named `issueWithSingUseJoseOrJsonwebtoken` where you can check the details.

Tests will be written without considering the authorization service until `jsonwebtoken` is fixed.

## Directory Structure

- `issueWithSingUseJoseOrJsonwebtoken/`
    - Details and information about the issue with token signing using `jose` or `jsonwebtoken`.

## Note

Until the issue with `jsonwebtoken` is resolved, tests will exclude the authorization service.
