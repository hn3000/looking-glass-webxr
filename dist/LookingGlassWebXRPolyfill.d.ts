/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import WebXRPolyfill from "@lookingglass/webxr-polyfill/src/WebXRPolyfill";
import LookingGlassXRDevice from "./LookingGlassXRDevice";
import { ViewControlArgs } from "./LookingGlassConfig";
export declare class LookingGlassWebXRPolyfill extends WebXRPolyfill {
    private vrButton;
    device: LookingGlassXRDevice;
    /** true when previewing on Looking Glass */
    isPresenting: boolean;
    constructor(cfg?: Partial<ViewControlArgs>);
    private overrideDefaultVRButton;
    private updateVRButtonUI;
    update(cfg: Partial<ViewControlArgs>): void;
}
/**
 * Get the global Looking Glass Config.
 * @deprecated In order to migrate to the latest setup, pass the config into LookingGlassWebXRPolyfill
 * ```
 * new LookingGlassWebXRPolyfill({
 * 	 tileHeight: 512,
 *   numViews: 45,
 *  ...
 * })
 * ```
 */
export declare const LookingGlassConfig: import("./LookingGlassConfig").LookingGlassConfig;
