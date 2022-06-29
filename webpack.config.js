const path = require('path'); // node.js path 모듈을 불러옵니다. 운영체제별로 상이한 경로 문법(구분자 : / 혹은 \)를 해결해 절대 경로로 반환하는 역할을 합니다.
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        // publicPath : 빌드 할 때 CSS나 HTML파일 안에 URL들을 업데이트 해줍니다.
        publicPath: '/webpackIIFENEW/dist/',
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [ // 여기서 로더를 추가할 수 있습니다.
            // {
            //     // 로더가 처리해야할 파일의 패턴(정규표현식)입니다. 
            //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
            //     test: /\.js$/,
            //     use: [
            //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
            //         path.resolve('./myLoader.js')
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 20kb
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '배너입니다!! 마지막 빌드 시간은 ' + new Date().toLocaleString() + ' 입니다.'
        })
    ]
};
