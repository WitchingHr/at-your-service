import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const newJob = functions.firestore.document("jobs/{jobId}")
  .onCreate(async (snap, context) => {
    const jobSnap = await db.collection("jobs").doc(context.params.jobId).get();
    const data = jobSnap.data() || {};
    const msg = {
      to: "atyourservice603@gmail.com",
      from: "atyourservice603mail@gmail.com",
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        description: data.description,
      },
    };
    return sgMail.send(msg);
  });