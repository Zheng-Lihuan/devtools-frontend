// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as EnvironmentHelpers from '../../../test/unittests/front_end/helpers/EnvironmentHelpers.js';
import * as ComponentHelpers from '../../component_helpers/component_helpers.js';
import * as Components from '../../ui/components/components.js';

await EnvironmentHelpers.initializeGlobalVars();
await ComponentHelpers.ComponentServerSetup.setup();

const component = new Components.DataGridController.DataGridController();

component.data = {
  columns: [
    {id: 'key', title: 'Key', sortable: true, widthWeighting: 1, visible: true, hideable: false},
    {id: 'value', title: 'Value', sortable: true, widthWeighting: 1, visible: true, hideable: true},
  ],
  rows: [
    // Each key is the ID of a column, and the value is the value for that column
    {cells: [{columnId: 'key', value: 'Bravo', title: 'Bravo'}, {columnId: 'value', value: 'Letter B'}]},
    {cells: [{columnId: 'key', value: 'Alpha', title: 'Alpha'}, {columnId: 'value', value: 'Letter A'}]},
    {cells: [{columnId: 'key', value: 'Charlie', title: 'Charlie'}, {columnId: 'value', value: 'Letter C'}]},
  ],
};

document.getElementById('container')?.appendChild(component);
