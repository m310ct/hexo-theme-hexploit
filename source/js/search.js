var searchFunc = function (path, search_id, content_id) {
  console.log("[info] search.js loaded!");

  // AJAX 请求加载 JSON 数据
  $.ajax({
    url: path,
    dataType: "json",
    success: function (data) {
      var $input = document.getElementById(search_id);
      var $resultContent = document.getElementById(content_id);

      if (!$input) return;

      $input.addEventListener("input", function () {
        var str = '<ul class="list-none m-0 p-0">';
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        $resultContent.innerHTML = "";

        if (this.value.trim().length <= 0) {
          return;
        }

        // 遍历每篇文章数据
        data.forEach(function (dataItem) {
          var isMatch = false;
          var data_title = (dataItem.title || "").trim().toLowerCase();
          var data_content = (dataItem.content || "")
            .trim()
            .replace(/<[^>]+>/g, "")
            .replace(/\n/g, " ")
            .toLowerCase();
          var data_url = dataItem.url;

          // 检查标题和内容是否包含关键字
          isMatch = keywords.every(function (keyword) {
            return (
              data_title.includes(keyword) || data_content.includes(keyword)
            );
          });

          // 如果匹配到，显示结果
          if (isMatch) {
            str +=
              "<li><a href='" +
              data_url +
              "' class='text-hacker-color1 font-bold text-xl mb-2 inline-block hover:text-white'>" +
              data_title +
              "</a>";

            // 截取匹配内容
            var first_occur = data_content.indexOf(keywords[0]);
            if (first_occur >= 0) {
              var start = Math.max(0, first_occur - 20);
              var end = Math.min(data_content.length, first_occur + 80);
              var match_content = data_content.substring(start, end);

              keywords.forEach(function (keyword) {
                var regS = new RegExp(keyword, "gi");
                match_content = match_content.replace(
                  regS,
                  '<em class="text-white px-1 rounded">' + keyword + "</em>"
                );
              });

              str += '<p class="text-gray-400 text-base leading-6">' + match_content + "...</p>";
            }
            str += "</li>";
          }
        });

        str += "</ul>";
        $resultContent.innerHTML = str;
      });
    },
    error: function () {
      console.error("Failed to load search.json!");
    },
  });
};

// 调用搜索函数
searchFunc("/search.json", "search-input", "search-results");
