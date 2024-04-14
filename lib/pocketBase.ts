import PocketBase from "pocketbase";
import { TypedPocketBase } from "./pocketbase-types";

export const pocketBase: TypedPocketBase = new PocketBase("https://invoice-pioneer.pockethost.io");
