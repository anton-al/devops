#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStarterStack } from '../lib/cdk-starter-stack';
import {PhotosStack} from "../lib/PhotosStack";
import {PhotosHandlerStack} from "../lib/PhotosHandlerStack";
import {BucketTagger} from "./BucketTagger";

const app = new cdk.App();
const photosStack = new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: photosStack.photosBucketArn
});

const tagger = new BucketTagger("env", "test");
cdk.Aspects.of(app).add(tagger);