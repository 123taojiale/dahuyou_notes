if (!this.myPlugin) {
    this.myPlugin = {};
}

this.myPlugin.jigsawPuzzle = function (options) {

    let defaultOptions = {
        imgWidth: 500, // 默认图片的宽度为 500
        imgHeight: 500, // 默认图片的高度为 500
        row: 3, // 默认行数
        col: 3, // 默认列数
        imgSrc: '', // 图片的路径
        gameContainerBox: document.body, // 图片容器
        blocks: [], // 每一张小图片对象
        isOver: false, // 所有小图位于正确位置时 游戏结束 isOver 变为 true
        easer: true // 是否让游戏更简单
    }


    options = Object.assign({}, defaultOptions, options); // 对象混合 (对于jigsawPuzzle的参数options 若用户有传入 则优先使用用户传入的参数 否则使用默认参数)


    options.pieceWidth = options.imgWidth / options.col; // 每一张小图片的宽度
    options.pieceHeight = options.imgHeight / options.row; // 每一张小图片的高度


    if (!options.imgSrc) {
        alert('请传入图片...');
        return;
    }


    init();


    function init() {
        initGameContainer();
        initPieceImg();

        // 初始化图片容器
        function initGameContainer() {
            let box = options.gameContainerBox;
            box.style.width = options.imgWidth + 'px';
            box.style.height = options.imgHeight + 'px';
            box.style.margin = '100px auto';
            box.style.border = '2px solid #008c8c';
            box.style.position = 'relative';
        }

        // 初始化每一张小图片
        function initPieceImg() {
            let isHidden = false; // 默认创建的图片不隐藏
            for (let i = 0; i < options.row; i++) {
                for (let j = 0; j < options.col; j++) {
                    if (i === options.col - 1 && j === options.row - 1) {
                        isHidden = true; // 将最后一张图片隐藏
                    }
                    let pieceImg = new PieceImg(j * options.pieceWidth, i * options.pieceHeight, isHidden);
                    options.blocks.push(pieceImg);
                }
            }
        }


        /**
         * 创建每一张小图片
         * @param {boolean} isHidden 是否隐藏图片
         */
        function PieceImg(left, top, isHidden) {
            this.left = left;
            this.top = top;
            this.correctLeft = left;
            this.correceTop = top;

            this.isHidden = isHidden;

            this.dom = document.createElement('div');
            this.dom.style.width = options.pieceWidth + 'px';
            this.dom.style.height = options.pieceHeight + 'px';
            this.dom.style.position = 'absolute';
            this.dom.style.cursor = 'pointer';
            this.dom.style.boxSizing = 'border-box';
            this.dom.style.border = '1px solid #ddd';
            this.dom.style.transition = '0.3s';
            this.dom.style.background = `url(${options.imgSrc}) -${this.left}px -${this.top}px / ${options.imgWidth}px ${options.imgHeight}px`;

            options.gameContainerBox.appendChild(this.dom);


            this.show = function () {
                this.dom.style.left = this.left + 'px';
                this.dom.style.top = this.top + 'px';
            }

            this.show();

            if (this.isHidden) {
                this.dom.style.display = 'none';
            }

            this.isCorrect = function () {
                return this.left === this.correctLeft && this.top === this.correceTop;
            }
        }


        randomPos();

        /**
         * 打乱每一张小图片之间的位置
         */
        function randomPos() {
            for (let i = 0; i < 10; i++) {
                let index1 = getRandom(0, 7),
                    index2 = getRandom(0, 7);
                exchangePos(options.blocks[index1], options.blocks[index2]);
            }
            /**
             * 获取随机数
             * @param {number} min 最小值
             * @param {number} max 最大值
             * @returns 介于最小值与最大值直接的一个随机整数
             */
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }


        /**
         * 互换两张图片的位置
         * @param {object} pieceImg1 图片对象1
         * @param {object} pieceImg2 图片对象2
         */
        function exchangePos(pieceImg1, pieceImg2) {
            let left = pieceImg1.left,
                top = pieceImg1.top;

            pieceImg1.left = pieceImg2.left;
            pieceImg1.top = pieceImg2.top;

            pieceImg2.left = left;
            pieceImg2.top = top;

            pieceImg1.show();
            pieceImg2.show();
        }


        Play();

        function Play() {
            bindEvent();

            // 获取不可见的 小图片
            let hiddenPiece = options.blocks.find(piece => {
                return piece.isHidden === true;
            });

            /**
             * 给每一张小图片绑定点击事件
             */
            function bindEvent() {
                options.blocks.forEach(piece => {
                    piece.dom.onclick = function (e) {
                        if (options.easer) {
                            /* 让游戏更简单 -> 取消两者之间交换的前提条件 */
                            exchangePos(piece, hiddenPiece);
                        } else {
                            // 判断是否相邻 相邻则交换两者的位置
                            if (piece.left === hiddenPiece.left && Math.abs(hiddenPiece.top - piece.top) === options.pieceHeight) {
                                exchangePos(piece, hiddenPiece);
                            }
                            if (piece.top === hiddenPiece.top && Math.abs(hiddenPiece.left - piece.left) === options.pieceWidth) {
                                exchangePos(piece, hiddenPiece);
                            }
                        }
                        isWin(); // 每一次移动后 都要判断一下是否游戏结束
                    }
                });
            }

            function isWin() {
                options.isOver = true; // 先假设玩家胜利
                options.blocks.forEach(piece => {
                    // console.log(piece.isCorrect());
                    if (piece.isCorrect() === false) {
                        options.isOver = false; // 但凡有一张小图片不位于正确的位置上 游戏就未结束
                    }
                });
                if (options.isOver) { // 若游戏结束
                    alert('恭喜您, 游戏通过 !!!');
                    options.blocks.forEach(piece => {
                        piece.dom.style.display = 'block'; // 展示没一张小图片
                        piece.dom.style.border = 'none'; // 去除每一张小图片的边框
                        piece.dom.onclick = null; // 注销绑定在每一张小图片身上的事件处理函数
                    });

                }
            }
        }
    }


}