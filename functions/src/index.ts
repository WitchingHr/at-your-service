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
      to: "matt1494@gmail.com",
      from: "matt.thomas.developer@gmail.com",
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