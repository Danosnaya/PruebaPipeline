# README #

This README would normally document whatever steps are necessary to get your application up and running.

### Required variables ###

- GKE_EMAIL 
(EMAIL column on the output of `$ gcloud iam service-accounts list`)
- GCLOUD_API_KEYFILE
```
$ gcloud iam service-accounts keys create key.json --iam-account=$GKE_EMAIL
```

- GKE_SA_KEY_DEC
```
$ cat key.json | base64
```

- GCLOUD_PROJECT_ID (Google Cloud project name)
- GCLOUD_CLUSTER_NAME (Google Cloud cluster name)
- GCLOUD_ZONE (Google Cloud cluster zone, example us-central1-a)


