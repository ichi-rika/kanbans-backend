#!/bin/bash

cd .. && vendor/bin/doctrine orm:schema-tool:update --force --dump-sql
