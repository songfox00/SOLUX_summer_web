<script type="text/javascript">
        function SearchSite(){<!--switch문을 이용하여 prompt에 적은 방탈출 카페 사이트에 window.open사용하여 연결, -->
        var win;
        var site=prompt("현재 검색 가능한 사이트:\n덤앤더머, 룸즈에이, 넥스트에디션, 비트포비아","");
        switch(site){
          case "덤앤더머":
          win=window.open("http://www.dumbndumber.kr/");
          break;
          case "룸즈에이":
          win=window.open("http://roomsa.co.kr/");
          break;
          case "넥스트에디션":
          win=window.open("https://www.nextedition.co.kr/");
          break;
          case "비트포비아":
          win=window.open("https://www.xphobia.net/");
          break;
        }
        }
      </script>