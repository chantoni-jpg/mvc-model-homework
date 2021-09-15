//console.log("model");
var MODEL = (function () {
  var _myVar = "Model";
  var _japanPageInfo = `    <div class="home">
  <h1>Trips To Japan</h1>
  <div class="img1"></div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit vitae cumque quae temporibus tenetur, eligendi culpa rem debitis saepe dignissimos fuga earum dolor possimus? Enim voluptatum soluta quia. Reprehenderit!
  Illo hic eligendi reiciendis expedita, nam debitis blanditiis id ipsam odio minus aliquam natus temporibus sed fugiat aperiam aliquid magnam placeat repudiandae tempora ipsum nisi assumenda inventore? Ipsam, repudiandae similique?
  Tempore, enim nostrum suscipit accusamus aliquid unde nulla earum quaerat quas id accusantium dignissimos incidunt sequi, commodi dolores quia quis dolor veniam atque possimus in, ipsam vero? Tempore, velit quisquam!
  Quaerat, labore quod repellendus iste obcaecati vel nesciunt vitae atque quia culpa omnis voluptas itaque maxime quasi ad, modi consequatur at voluptates eaque laboriosam natus provident? Dolore fuga porro ab.</p>
  <div class="img2"></div>

</div>`;
  var _englandPageInfo = `    <div class="about">
  <h1>Trips To England</h1>
  <div class="img3"></div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit vitae cumque quae temporibus tenetur, eligendi culpa rem debitis saepe dignissimos fuga earum dolor possimus? Enim voluptatum soluta quia. Reprehenderit!
  Illo hic eligendi reiciendis expedita, nam debitis blanditiis id ipsam odio minus aliquam natus temporibus sed fugiat aperiam aliquid magnam placeat repudiandae tempora ipsum nisi assumenda inventore? Ipsam, repudiandae similique?
  Tempore, enim nostrum suscipit accusamus aliquid unde nulla earum quaerat quas id accusantium dignissimos incidunt sequi, commodi dolores quia quis dolor veniam atque possimus in, ipsam vero? Tempore, velit quisquam!
  Quaerat, labore quod repellendus iste obcaecati vel nesciunt vitae atque quia culpa omnis voluptas itaque maxime quasi ad, modi consequatur at voluptates eaque laboriosam natus provident? Dolore fuga porro ab.</p>
  <div class="img4"></div>

</div>`;
  var _reviewPageInfo = `     <div class="reviews">
  <h1>Reviews From Real People</h1>
  <div class="img5"></div>
  <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo iusto non consequuntur? Totam delectus consequuntur ipsum magnam! Aliquid temporibus, aut aliquam, dolore ut, molestiae obcaecati iste rem non voluptatum quibusdam?
      Voluptatibus officiis vel consequuntur, soluta, ut rem saepe itaque atque quaerat delectus recusandae excepturi repudiandae ipsa neque ab quae corporis natus iure harum nesciunt asperiores, ex quam? Nobis, reprehenderit debitis?</p>
  </div>
  <div class="img6"></div>
  <div class="text2">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vero nisi aspernatur non ipsum, saepe magnam incidunt aut iste voluptate, nam, eligendi aliquam tempora at neque? Aperiam, adipisci. Hic, nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus molestiae iusto excepturi! In atque, autem aliquam libero error aut voluptatem asperiores? Quisquam itaque officia veniam consectetur unde nisi culpa.</p>
  </div>
</div>`;
  var _loginPageInfo = `    <div class="trips">
  <h1>More Trips To Take!</h1>
  <div class="korea"></div>
  <div class="text">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quas eveniet aut consequatur nam rerum tenetur laborum optio. Modi quam pariatur ducimus doloribus eum dolorum ab officiis. Numquam, molestiae alias.
      At soluta voluptatum qui ducimus fugit, debitis rem eum error rerum eos laudantium, fugiat tenetur alias iusto corporis expedita deleniti cum autem optio doloremque. Necessitatibus voluptate id animi eos debitis.</p>
  </div>
  <div class="vietnam"></div>
  <div class="text">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veritatis numquam assumenda sapiente, ut nam laborum voluptate et explicabo adipisci, labore in hic blanditiis officia provident cupiditate harum cum aspernatur.
      Perferendis recusandae assumenda reprehenderit in debitis cum itaque. Voluptatibus dignissimos fugit voluptas exercitationem vel reiciendis vitae dolorem incidunt magnam expedita, mollitia tempore similique quae cum, minima, id unde aut modi?</p>
  </div>
</div>`;

  var _getMyVariable = function (buttonID, callback) {
    let newName = "_" + buttonID + "PageInfo";
    $("#content").html(eval(newName));
    callback(newName);
  };

  return {
    getMyVariable: _getMyVariable,
  };
})();
