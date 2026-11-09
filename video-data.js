/* Tự sinh bởi cong-cu-tao-video/tao_video.py — không sửa tay. */
window.VIDEO_DATA = {
 "video": "bai-giang-can-bang-hoa-hoc.mp4",
 "chapters": [
  {
   "title": "Phản ứng một chiều và phản ứng thuận nghịch",
   "kicker": "Phần 1",
   "t": 2.17
  },
  {
   "title": "Trạng thái cân bằng hóa học",
   "kicker": "Phần 2",
   "t": 80.09
  },
  {
   "title": "Hằng số cân bằng KC",
   "kicker": "Phần 3",
   "t": 156.71
  },
  {
   "title": "Sự chuyển dịch cân bằng — Nguyên lí Le Chatelier",
   "kicker": "Phần 4",
   "t": 246.31
  },
  {
   "title": "Ứng dụng: sản xuất ammonia (quá trình Haber)",
   "kicker": "Phần 5",
   "t": 360.46
  },
  {
   "title": "Tổng kết bài học",
   "kicker": "Phần 6",
   "t": 437.02
  }
 ],
 "questions": [
  {
   "id": "s1",
   "t": 60.67,
   "resume": 80.09,
   "audio": {
    "say": "audio/cau1_hoi.mp3",
    "ok": "audio/cau1_dung.mp3"
   },
   "type": "mcq",
   "say": "Câu hỏi số một. Phản ứng nào dưới đây là phản ứng thuận nghịch?",
   "prompt": "Phản ứng nào dưới đây là <b>phản ứng thuận nghịch</b>? <span class=\"muted\">(ô ▢ thay cho kí hiệu chiều phản ứng)</span>",
   "options": [
    {
     "h": "2KClO<sub>3</sub> ▢ 2KCl + 3O<sub>2</sub> <span class=\"muted\">(t°, MnO<sub>2</sub>)</span>",
     "fb": "KCl và O<sub>2</sub> không phản ứng với nhau để tạo lại KClO<sub>3</sub> — đây là phản ứng một chiều."
    },
    {
     "h": "N<sub>2</sub> + 3H<sub>2</sub> ▢ 2NH<sub>3</sub> <span class=\"muted\">(t°, p, xt)</span>",
     "ok": true
    },
    {
     "h": "Mg + 2HCl ▢ MgCl<sub>2</sub> + H<sub>2</sub>",
     "fb": "MgCl<sub>2</sub> và H<sub>2</sub> không phản ứng tạo lại Mg và HCl — phản ứng một chiều."
    },
    {
     "h": "CH<sub>4</sub> + 2O<sub>2</sub> ▢ CO<sub>2</sub> + 2H<sub>2</sub>O <span class=\"muted\">(t°)</span>",
     "fb": "Phản ứng cháy chỉ xảy ra theo một chiều."
    }
   ],
   "explain": "N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>: trong cùng điều kiện, NH<sub>3</sub> tạo thành lại bị phân hủy thành N<sub>2</sub> và H<sub>2</sub>, nên phản ứng xảy ra theo hai chiều.",
   "sayOk": "Chính xác! Phản ứng tổng hợp ammonia xảy ra theo cả hai chiều trong cùng điều kiện."
  },
  {
   "id": "s2",
   "t": 136.03,
   "resume": 156.71,
   "audio": {
    "say": "audio/cau2_hoi.mp3",
    "ok": "audio/cau2_dung.mp3"
   },
   "type": "tf",
   "say": "Câu hỏi số hai. Em hãy xác định mỗi phát biểu sau là đúng hay sai.",
   "prompt": "Xét cân bằng H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). Mỗi phát biểu sau là <b>đúng</b> hay <b>sai</b>?",
   "statements": [
    {
     "h": "Khi hệ đạt trạng thái cân bằng, phản ứng dừng lại.",
     "ok": false,
     "fb": "Phản ứng thuận và nghịch vẫn xảy ra — cân bằng là cân bằng động."
    },
    {
     "h": "Ở trạng thái cân bằng, tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.",
     "ok": true,
     "fb": "Đây chính là dấu hiệu của trạng thái cân bằng."
    },
    {
     "h": "Ở trạng thái cân bằng, nồng độ của H<sub>2</sub>, I<sub>2</sub> và HI luôn bằng nhau.",
     "ok": false,
     "fb": "Nồng độ các chất không đổi theo thời gian, nhưng không nhất thiết bằng nhau."
    },
    {
     "h": "Cân bằng hóa học là một cân bằng động.",
     "ok": true,
     "fb": "Hai chiều phản ứng vẫn diễn ra với tốc độ bằng nhau."
    }
   ],
   "explain": "Ở trạng thái cân bằng: v<sub>thuận</sub> = v<sub>nghịch</sub> ≠ 0; nồng độ các chất không đổi (nhưng không nhất thiết bằng nhau). Đáp án: a) Sai · b) Đúng · c) Sai · d) Đúng.",
   "sayOk": "Chính xác! Ở trạng thái cân bằng, tốc độ thuận bằng tốc độ nghịch, và phản ứng vẫn tiếp diễn."
  },
  {
   "id": "s3",
   "t": 226.76,
   "resume": 246.31,
   "audio": {
    "say": "audio/cau3_hoi.mp3",
    "ok": "audio/cau3_dung.mp3"
   },
   "type": "short",
   "say": "Câu hỏi số ba. Em hãy tính hằng số cân bằng ca xê, rồi nhập kết quả vào ô trả lời.",
   "prompt": "Cho cân bằng: N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g). Ở nhiệt độ T, nồng độ các chất tại cân bằng là [N<sub>2</sub>O<sub>4</sub>] = 0,10 M và [NO<sub>2</sub>] = 0,06 M. Tính hằng số cân bằng K<sub>C</sub>. <span class=\"muted\">(làm tròn đến hàng phần nghìn)</span>",
   "label": "K<sub>C</sub> =",
   "answer": 0.036,
   "tol": 0.0006,
   "hints": [
    "Gợi ý: K<sub>C</sub> = [NO<sub>2</sub>]<sup>2</sup> / [N<sub>2</sub>O<sub>4</sub>]. Đừng quên lũy thừa 2 (hệ số của NO<sub>2</sub>).",
    "Gợi ý thêm: [NO<sub>2</sub>]<sup>2</sup> = 0,06<sup>2</sup> = 0,0036. Hãy chia cho [N<sub>2</sub>O<sub>4</sub>]."
   ],
   "explain": "K<sub>C</sub> = [NO<sub>2</sub>]<sup>2</sup> / [N<sub>2</sub>O<sub>4</sub>] = 0,06<sup>2</sup> / 0,10 = 0,0036 / 0,10 = <b>0,036</b>.",
   "sayOk": "Chính xác! Ca xê bằng không phẩy không ba sáu."
  },
  {
   "id": "s4",
   "t": 339.01,
   "resume": 360.46,
   "audio": {
    "say": "audio/cau4_hoi.mp3",
    "ok": "audio/cau4_dung.mp3"
   },
   "type": "mcq",
   "say": "Câu hỏi số bốn. Biện pháp nào làm cân bằng chuyển dịch theo chiều tạo thêm ammonia?",
   "prompt": "Cho cân bằng: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), Δ<sub>r</sub>H°<sub>298</sub> &lt; 0. Biện pháp nào làm cân bằng chuyển dịch theo chiều <b>tạo thêm NH<sub>3</sub></b>?",
   "options": [
    {
     "h": "Tăng nhiệt độ",
     "fb": "Chiều thuận tỏa nhiệt. Tăng nhiệt độ làm cân bằng chuyển dịch theo chiều thu nhiệt, tức là chiều nghịch."
    },
    {
     "h": "Giảm áp suất",
     "fb": "Giảm áp suất làm cân bằng chuyển dịch theo chiều tăng số mol khí, tức là chiều nghịch (2 mol → 4 mol)."
    },
    {
     "h": "Tăng áp suất",
     "ok": true
    },
    {
     "h": "Thêm chất xúc tác Fe",
     "fb": "Chất xúc tác chỉ giúp nhanh đạt cân bằng, không làm chuyển dịch cân bằng."
    }
   ],
   "explain": "Chiều thuận làm giảm số mol khí (4 mol → 2 mol). Khi tăng áp suất, cân bằng chuyển dịch theo chiều làm giảm áp suất, tức là chiều thuận — tạo thêm NH<sub>3</sub>.",
   "sayOk": "Chính xác! Tăng áp suất làm cân bằng chuyển dịch theo chiều làm giảm số mol khí, tức là chiều thuận."
  },
  {
   "id": "s5",
   "t": 415.07,
   "resume": 437.02,
   "audio": {
    "say": "audio/cau5_hoi.mp3",
    "ok": "audio/cau5_dung.mp3"
   },
   "type": "mcq",
   "say": "Câu hỏi số năm. Vì sao trong công nghiệp không tổng hợp ammonia ở nhiệt độ thấp?",
   "prompt": "Phản ứng tổng hợp NH<sub>3</sub> tỏa nhiệt, nên ở nhiệt độ thấp hiệu suất cân bằng cao hơn. Vì sao trong công nghiệp <b>không</b> tiến hành ở nhiệt độ thấp (ví dụ 25 °C)?",
   "options": [
    {
     "h": "Vì ở nhiệt độ thấp, cân bằng chuyển dịch theo chiều nghịch.",
     "fb": "Ngược lại: giảm nhiệt độ làm cân bằng chuyển dịch theo chiều tỏa nhiệt, tức là chiều thuận."
    },
    {
     "h": "Vì ở nhiệt độ thấp, tốc độ phản ứng quá chậm.",
     "ok": true
    },
    {
     "h": "Vì ở nhiệt độ thấp, hằng số cân bằng K<sub>C</sub> giảm.",
     "fb": "Với phản ứng tỏa nhiệt, giảm nhiệt độ làm K<sub>C</sub> tăng chứ không giảm."
    },
    {
     "h": "Vì NH<sub>3</sub> bị phân hủy hoàn toàn ở nhiệt độ thấp.",
     "fb": "NH<sub>3</sub> bền ở nhiệt độ thường; nó chỉ phân hủy đáng kể khi bị đun nóng mạnh."
    }
   ],
   "explain": "Ở nhiệt độ thấp, phản ứng xảy ra quá chậm, rất lâu mới đạt cân bằng. Người ta chọn nhiệt độ vừa phải (400–500 °C) và dùng xúc tác Fe để dung hòa giữa hiệu suất và tốc độ.",
   "sayOk": "Chính xác! Nhiệt độ thấp làm phản ứng xảy ra quá chậm, nên người ta chọn nhiệt độ vừa phải và dùng xúc tác."
  }
 ],
 "end": 477.69
};
