async function instaAPI() {
    let cards = 3; // insta投稿の表示件数を指定
    const response = await fetch(`https://graph.facebook.com/v21.0/17841470897073732?fields=name,media.limit(${cards}){ caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=EAAT4ZCAqnEMEBOyOeEMIqt8ZAtKrDwFmM8xPhcEY7RaZClZBA3GLRIGuIxAG5x3PCnk5A16Pk7DqkPNZAGqCdDIF2YeYh4oqw84vsTbfqD8FwQu5IHKgxyKGLhBU3ZAalzm6861LzIfrjkma60aKOsrQTgNyAMjx9KQ3ZCh6rSx2Kx4qV9v6ZBQb0ifCAZA3ymozzibc5ZAeXSi9an0WzI`);

    if (response.status === 200) {
        const resObjects = await response.json();
        // console.log(resObjects.media);
        //（挙動への影響は一切無いものの）オブジェクト{resObjects.media}内のプロパティ{paging}のせいで「instaItems[1]が無いというエラー」が出るので削除して以降の処理を進めていく
        delete (resObjects.media.paging);

        Object.entries(resObjects.media).forEach(instaItems => {
            // console.log(instaItems);
            instaItems[1].forEach(eachItem => {
                if (eachItem.media_url !== null) {
                    // 投稿が動画か否かを判定して{media}を変更
                    if (eachItem.media_type === 'VIDEO') {
                        eachItem.media = eachItem.thumbnail_url;
                    } else {
                        eachItem.media = eachItem.media_url;
                    }

                    const eachItemCaption = eachItem.caption;
                    // console.log(eachItemCaption, eachItem);
                    const captions = eachItem.caption.slice(0, 40);
                    const captionTxt = `${captions}……`;

                    // 追加した子要素<ul>に各アイテム<li>を生成
                    document.querySelector('.news__list').insertAdjacentHTML('beforeend', `<article class="news__item"><a href="${eachItem.permalink}" target="_blank" rel="noopener" title="公式インスタグラムの投稿を見る"><div class="news__image"><img src="${eachItem.media}" alt="" width="1600" height="1068" loading="lazy"></div><div class="news__text"><p>${captionTxt}</p></a></article>`);
                }
            });
        });
    } else {
        document.querySelector('#insta ul').insertAdjacentHTML('beforeend', `<p style="text-align:center;width:100%;">読み込めませんでした</p>`);
    }
}
instaAPI(); // 関数の実行

//参考URL
//https://qiita.com/benjuwan/items/a31e23121456f5c29083
