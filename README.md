# README #

This README would normally document whatever steps are necessary to get your application up and running.

### Required variables ###

- GCLOUD_PROJECT_ID (Google Cloud project name)
- GCLOUD_CLUSTER_NAME (Google Cloud cluster name)
- GCLOUD_ZONE (Google Cloud cluster zone, example us-central1-a)
- GCLOUD_API_KEYFILE
```
$ gcloud iam service-accounts list
$ gcloud iam service-accounts keys create key.json --iam-account=<service-account-email-from-previous-command>
```


