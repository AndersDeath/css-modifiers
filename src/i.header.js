#!/usr/bin/env node

// header of application

// Main dependencies
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const exec = require('child_process').exec;

// user constants

const version = require('../package.json').version;