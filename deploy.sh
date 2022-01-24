#!/bin/sh

#Git Deploy
git add .
git commit -m "deploy"
git push -u origin main

#Build App
npm run build

#Deploy to Firebase
firebase deploy