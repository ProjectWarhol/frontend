module.exports = {
  apps: [
    {
      name: 'frontend-prod',
      script: 'yarn build && yarn start',
      time: true,
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '46.101.106.146',
      ssh_options: 'StrictHostKeyChecking=no',
      key: '~/.ssh/deploy.key',
      ref: 'origin/main',
      repo: 'https://github.com/ProjectWarhol/frontend.git',
      path: '/var/www/frontend',
      'post-deploy':
        'yarn install && pm2 startOrRestart ecosystem.config.js && pm2 save',
    },
  },
};
