module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c3c97a5037efbff8d3b7ed493e02670'),
  },
});
