require.config({
    // 默认data-main文件所在的目录
    // baseUrl:'js',

    // 别名/虚拟路径
    paths: {
        'jquery': '../lib/jquery-3.2.1',
        'common': 'common',
        'gdszoom': '../lib/jquery-gdsZoom/jquery.gdsZoom',
        'mjCarousel': '../lib/jquery-mjCarousel/jquery.mjCarousel',
    },
    shim: {
        // 设置依赖
        gdszoom: ['jquery'],
        mjCarousel: ['jquery', 'common']
    }
});