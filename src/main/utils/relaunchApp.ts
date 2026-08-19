/*
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2026 Vendicated and Vesktop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { app } from "electron";
import { destroyTray } from "main/tray";

export function relaunchApp() {
    destroyTray();
    app.relaunch();
    app.quit();
}
