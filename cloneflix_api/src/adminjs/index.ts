import AdminJS from "adminjs";
import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import { database } from "../database";
import { adminJsResources } from './resources';
import {locale} from './locale';
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authtenticationOptions } from './authentication';


AdminJS.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJS({
    databases: [database],
    resources: adminJsResources,
    rootPath: "/admin",
    dashboard: dashboardOptions,
    locale: locale,
    branding:brandingOptions
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  { resave: false, saveUninitialized: false })