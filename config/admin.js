module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '402a74d117a26ec5733711e7c028b716'),
  },
});
