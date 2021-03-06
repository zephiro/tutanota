//@flow
import {nativeApp} from "./NativeWrapper"
import {Request} from "../api/common/WorkerProtocol"
/**
 * Open the link
 * @param uri The uri
 */

export function openLinkNative(uri: string): Promise<boolean> {
	return nativeApp.invokeNative(new Request("openLink", [uri]))
}