/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TasksComponent } from './tasks.component';

describe('Component: Tasks', () => {
  it('should create an instance', () => {
    let component = new TasksComponent();
    expect(component).toBeTruthy();
  });
});
