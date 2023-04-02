const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@context': 'src/context',
        '@hoc-helpers': 'src/hoc-helpers',
        '@hooks': 'src/hooks',
        '@routes': 'src/routes',
        '@services': 'src/services',
        '@static': 'src/static',
        '@store': 'src/store',
        '@styles': 'src/styles',
        '@UI': 'src/components/UI',
        '@utils': 'src/utils',

    })(config);

    return config;
}

