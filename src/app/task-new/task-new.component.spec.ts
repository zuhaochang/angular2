/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TaskNewComponent } from './task-new.component';

describe('Component: TaskNew', () => {
  it('should create an instance', () => {
    let component = new TaskNewComponent();
    expect(component).toBeTruthy();
  });
});
