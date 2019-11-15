const AWS = require('aws-sdk');

const config = {
  apiVersion: '2006-03-01',
  region: 'eu-north-1',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
};

const s3 = new AWS.S3(config);

const S3 = {
  upload({ fileName, content, contentType }) {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: 'codeshare-storage',
        Body: content,
        Key: fileName,
        ContentType: contentType,
      };

      const upload = s3.upload(params);

      upload
        .promise()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  listObjects() {
    return new Promise((resolve, reject) => {
      s3.listObjects({
        Bucket: 'codeshare-storage',
      }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  getObject(Key) {
    return new Promise((resolve, reject) => {
      s3.getObject({
        Bucket: 'codeshare-storage',
        Key,
      }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  deleteObjects(Keys) {
    return new Promise((resolve, reject) => {
      s3.deleteObjects({
        Bucket: 'codeshare-storage',
        Delete: {
          Objects: Keys.map((Key) => ({ Key })),
        },
      }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
};

module.exports = S3;
